import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Schedule: Monday to Sunday (matching the order of days array)
  // From the business data: Wednesday: 14:00-18:00; Friday: 14:00-18:00; Saturday: 10:00-16:00
  const schedule = [
    { hours: t.hours.closed }, // Monday
    { hours: t.hours.closed }, // Tuesday
    { hours: "14:00 - 18:00" }, // Wednesday
    { hours: t.hours.closed }, // Thursday
    { hours: "14:00 - 18:00" }, // Friday
    { hours: "10:00 - 16:00" }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  // Get today's day index (0 = Sunday, 1 = Monday, etc.)
  // Convert to our array index (0 = Monday)
  const today = new Date().getDay();
  const todayIndex = today === 0 ? 6 : today - 1;

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="horaires" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.hours.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">
            {t.hours.title}
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto max-w-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="rounded-2xl border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-medium">
                {t.hours.header}
              </span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      )}
                      <span
                        className={`${
                          isToday ? "font-medium text-primary" : "text-foreground"
                        }`}
                      >
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-right ${
                        isClosed ? "text-muted-foreground" : "font-medium"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
